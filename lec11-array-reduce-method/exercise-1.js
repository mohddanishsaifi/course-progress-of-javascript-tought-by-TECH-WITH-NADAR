const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, company, currentIndex) => {
  if (currentIndex === 5) result += company;
  else if (!company.startsWith("a")) result += company + "-";
  return result;
}, "");
console.log(modded);
