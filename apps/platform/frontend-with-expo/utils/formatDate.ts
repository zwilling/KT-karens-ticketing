export function formatDate(timestamp) {
   const date = new Date(timestamp * 1000);
  
  // Create an Intl.DateTimeFormat object for formatting
  const formatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true, 
  });
  
  // Format the date and time
  const formattedDate = formatter.format(date);

  return formattedDate;
}