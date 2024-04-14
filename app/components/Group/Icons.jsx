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

export function ExpandMore({ color = "#1C1B1F" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M11.9941 15.7716L5.99414 9.77158L7.39414 8.37158L11.9941 12.9716L16.5941 8.37158L17.9941 9.77158L11.9941 15.7716Z"
        fill={color}
      />
    </svg>
  );
}

export function ExpandLess({ color = "#1C1B1F" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M7.39414 15.7716L5.99414 14.3716L11.9941 8.37158L17.9941 14.3716L16.5941 15.7716L11.9941 11.1716L7.39414 15.7716Z"
        fill={color}
      />
    </svg>
  );
}
