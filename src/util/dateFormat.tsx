export const dateFormatter = (arg: string | number | Date ) => {
  const date = new Date(arg);

  // Define options for formatting
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',   // '01', '02', ..., '31'
    month: 'short',    // 'Jan', 'Feb', ..., 'Dec'
    year: 'numeric'   // '2024'
  };
  // Format the date
  const formattedDate = date.toLocaleDateString('en-GB', options)
    .replace(',', ''); // Remove the comma if needed
  return formattedDate;
}