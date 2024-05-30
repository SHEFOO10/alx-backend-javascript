export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (e) {
    queue.push(String(e), 'Guardrail was processed');
  }
  return queue;
}