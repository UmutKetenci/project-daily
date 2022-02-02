const paginate = (people) => {
  const peoplePerPage = 9; // the value you can change
  const pageNum = Math.ceil(people.length / peoplePerPage);
  console.log(pageNum);

  const newPeople = Array.from({ length: pageNum }, (_, index) => {
    const start = index * peoplePerPage;
    console.log(start);
    return people.slice(start, start + peoplePerPage);
  });
  return newPeople;
};
export default paginate;
