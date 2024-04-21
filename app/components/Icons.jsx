const defaultColor = "#1C1B1F";

export function ChevronRight({ color = defaultColor }) {
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

export function ChevronLeft({ color = defaultColor }) {
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

export function ExpandMore({ color = defaultColor }) {
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

export function ExpandLess({ color = defaultColor }) {
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

export function MoreHoriz({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M6.13672 14.2646C5.58672 14.2646 5.11589 14.0688 4.72422 13.6771C4.33255 13.2855 4.13672 12.8146 4.13672 12.2646C4.13672 11.7146 4.33255 11.2438 4.72422 10.8521C5.11589 10.4605 5.58672 10.2646 6.13672 10.2646C6.68672 10.2646 7.15755 10.4605 7.54922 10.8521C7.94089 11.2438 8.13672 11.7146 8.13672 12.2646C8.13672 12.8146 7.94089 13.2855 7.54922 13.6771C7.15755 14.0688 6.68672 14.2646 6.13672 14.2646ZM12.1367 14.2646C11.5867 14.2646 11.1159 14.0688 10.7242 13.6771C10.3326 13.2855 10.1367 12.8146 10.1367 12.2646C10.1367 11.7146 10.3326 11.2438 10.7242 10.8521C11.1159 10.4605 11.5867 10.2646 12.1367 10.2646C12.6867 10.2646 13.1576 10.4605 13.5492 10.8521C13.9409 11.2438 14.1367 11.7146 14.1367 12.2646C14.1367 12.8146 13.9409 13.2855 13.5492 13.6771C13.1576 14.0688 12.6867 14.2646 12.1367 14.2646ZM18.1367 14.2646C17.5867 14.2646 17.1159 14.0688 16.7242 13.6771C16.3326 13.2855 16.1367 12.8146 16.1367 12.2646C16.1367 11.7146 16.3326 11.2438 16.7242 10.8521C17.1159 10.4605 17.5867 10.2646 18.1367 10.2646C18.6867 10.2646 19.1576 10.4605 19.5492 10.8521C19.9409 11.2438 20.1367 11.7146 20.1367 12.2646C20.1367 12.8146 19.9409 13.2855 19.5492 13.6771C19.1576 14.0688 18.6867 14.2646 18.1367 14.2646Z"
        fill={color}
      />
    </svg>
  );
}

export function Check({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M9.6668 18.2413L3.9668 12.5413L5.3918 11.1163L9.6668 15.3913L18.8418 6.21631L20.2668 7.64131L9.6668 18.2413Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z"
        fill={color}
      />
    </svg>
  );
}

export function Add({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill={color} />
    </svg>
  );
}

export function CalendarViewWeek({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H15.5V6H13V18ZM8.5 18H11V6H8.5V18ZM4 18H6.5V6H4V18ZM17.5 18H20V6H17.5V18Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarViewMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4.8833 20.1978C4.3333 20.1978 3.86247 20.0019 3.4708 19.6103C3.07913 19.2186 2.8833 18.7478 2.8833 18.1978V6.19775C2.8833 5.64775 3.07913 5.17692 3.4708 4.78525C3.86247 4.39359 4.3333 4.19775 4.8833 4.19775H20.8833C21.4333 4.19775 21.9041 4.39359 22.2958 4.78525C22.6875 5.17692 22.8833 5.64775 22.8833 6.19775V18.1978C22.8833 18.7478 22.6875 19.2186 22.2958 19.6103C21.9041 20.0019 21.4333 20.1978 20.8833 20.1978H4.8833ZM4.8833 11.1978H8.8833V6.19775H4.8833V11.1978ZM10.8833 11.1978H14.8833V6.19775H10.8833V11.1978ZM16.8833 11.1978H20.8833V6.19775H16.8833V11.1978ZM8.8833 18.1978V13.1978H4.8833V18.1978H8.8833ZM10.8833 18.1978H14.8833V13.1978H10.8833V18.1978ZM16.8833 18.1978H20.8833V13.1978H16.8833V18.1978Z"
        fill={color}
      />
    </svg>
  );
}