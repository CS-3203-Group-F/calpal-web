export function ChevronRight({ color = "#1C1B1F" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M12.5941 12.3965L7.99414 7.79648L9.39414 6.39648L15.3941 12.3965L9.39414 18.3965L7.99414 16.9965L12.5941 12.3965Z"
        fill={color}
      />
    </svg>
  );
}

export function ChevronLeft({ color = "#1C1B1F" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M13.9941 18.3965L7.99414 12.3965L13.9941 6.39648L15.3941 7.79648L10.7941 12.3965L15.3941 16.9965L13.9941 18.3965Z"
        fill={color}
      />
    </svg>
  );
}
