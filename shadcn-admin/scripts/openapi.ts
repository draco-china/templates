import fs from 'node:fs';
import path from 'node:path';
import openapiTS, {
  astToString,
  type OpenAPITSOptions,
} from 'openapi-typescript';

interface Config {
  schemas: {
    name: string;
    path: string;
    output: string;
    options?: Partial<OpenAPITSOptions>;
  }[];
  globalOptions?: OpenAPITSOptions;
}

const defaultOptions: OpenAPITSOptions = {
  defaultNonNullable: true,
  exportType: true,
  makePathsEnum: true,
  pathParamsAsTypes: false,
  excludeDeprecated: true,
  alphabetize: true,
  enum: true,
  rootTypes: true,
  dedupeEnums: true,
  additionalProperties: false,
  immutable: false,
  arrayLength: false,
  enumValues: false,
  propertiesRequiredByDefault: false,
  emptyObjectsUnknown: false,
  rootTypesNoSchemaPrefix: false,
  generatePathParams: false,
};
function loadConfig(): Config {
  const configPath = path.join(process.cwd(), 'scripts', 'openapi.config.json');

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `❌ Configuration file not found at ${configPath}. Please create an openapi.config.json file.`,
    );
  }

  try {
    const configFile = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configFile) as Config;

    if (
      !config.schemas ||
      !Array.isArray(config.schemas) ||
      config.schemas.length === 0
    ) {
      throw new Error(
        'Configuration must contain at least one schema in the "schemas" array.',
      );
    }

    for (const [index, schema] of config.schemas.entries()) {
      if (!schema.name || !schema.path || !schema.output) {
        throw new Error(
          `Schema at index ${index} is missing required fields: name, path, or output.`,
        );
      }
    }

    config.globalOptions = {
      ...defaultOptions,
      ...config.globalOptions,
    };

    console.log(`📋 Loaded configuration from ${configPath}`);
    console.log(`📊 Found ${config.schemas.length} schema(s) to process`);

    return config;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `❌ Invalid JSON in configuration file ${configPath}: ${error.message}`,
      );
    }
    throw error;
  }
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function resolveSchemaPath(schemaPath: string): string | URL {
  if (schemaPath.startsWith('http://') || schemaPath.startsWith('https://')) {
    return new URL(schemaPath);
  }

  if (path.isAbsolute(schemaPath)) {
    return schemaPath;
  }

  return path.resolve(process.cwd(), schemaPath);
}

