import TicketCard from "./(components)/TicketCard";

const Dasboard = () => {
  return (
    <div className=" p-5">
      <div className="lg:grid grid-cols-2 cl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dasboard;
