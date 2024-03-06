export default function MessageBubbleBot({ content }) {
  return (
    <>
      <div className="bg-info rounded px-3 py-2 m-2" style={{ width: 'max-content' }}>
        {content}
      </div>
    </>
  );
}
