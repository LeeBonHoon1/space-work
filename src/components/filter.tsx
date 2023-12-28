import SortModal from "./modals/sort-modal";
import StateModal from "./modals/state-modal";

const Filter = () => {
  return (
    <div className="py-10">
      <div className="font-bold text-[32px]">이슈정리</div>
      <div className="flex justify-between pt-10">
        <StateModal />
        <SortModal />
      </div>
    </div>
  );
};

export default Filter;
