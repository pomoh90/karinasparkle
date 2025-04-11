// Logo.js
export default function Logo({ style }) {
  return (
    <div
      style={{
        maxWidth: '100px',
        maxHeight: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px',
        borderRadius: '5px',
        ...style, // принимаем переданные стили
      }}
    >
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.theeroticreview.com/site_listing/reviewed_seal.gif"
          alt="TER"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
          }}
        />
      </a>
    </div>
  );
}
