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
