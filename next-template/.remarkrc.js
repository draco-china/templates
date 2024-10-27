const gfmHighlight = [
  { from: 'Note', to: '[!NOTE]' },
  { from: 'Tip', to: '[!TIP]' },
  { from: 'Important', to: '[!IMPORTANT]' },
  { from: 'Warning', to: '[!WARNING]' },
  { from: 'Caution', to: '[!CAUTION]' },
];

function remarkGfmHighlight() {
  return async (tree) => {
    const { visit } = await import('unist-util-visit');
    visit(tree, 'blockquote', (node) => {
      visit(node.children[0], 'strong', (subnode) => {
        if (subnode.position.start.column !== 3) return;
        visit(subnode, 'text', (textnode) => {
          if (!['Note', 'Tip', 'Important', 'Warning', 'Caution'].includes(textnode.value)) return;
          for (const item of gfmHighlight) {
            if (item.from !== textnode.value) continue;
            subnode.type = 'text';
            subnode.value = item.to;
            return;
          }
        });
      });
    });
  };
}

function replaceNBSP(str) {
  return str.replaceAll(' ', ' ');
}

module.exports = {
  $schema: 'https://json.schemastore.org/remarkrc',
  plugins: [
    'remark-gfm',
    'remark-frontmatter',
    'remark-pangu',
    ['remark-textr', { plugins: [replaceNBSP] }],
    remarkGfmHighlight,
    // ----- Plugin -----------------------------------------------------------
    'remark-sort-definitions',
