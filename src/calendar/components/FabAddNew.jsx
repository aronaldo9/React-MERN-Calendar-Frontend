import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const toUTC = (date) =>
    new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: toUTC(new Date()),
      end: toUTC(addHours(new Date(), 2)),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Aarón",
      },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
