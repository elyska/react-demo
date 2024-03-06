export default function MessageBubbleBot({ content }) {
  return (
    <>
      <div className="bg-info-subtle rounded px-3 py-2 m-2 ms-auto" style={{ width: 'max-content' }}>
        {content}
      </div>
    </>
  );
}
