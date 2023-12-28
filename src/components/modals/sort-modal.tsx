import { useState } from "react";
import { ArrowDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { sortStore } from "../../store/sort-store";
import { Button } from "../ui/button";
import Modal from "../modal";

const SortModal = () => {
  const [sortState, setSortState] = useState([
    {
      state: "작성일 순",
      active: false,
    },
    {
      state: "수정일 순",
      active: false,
    },
    {
      state: "코멘트 순",
      active: false,
    },
  ]);
  const { currentSort, setSort } = sortStore();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    const activeState = sortState.find((state) => state.active);

    if (activeState) {
      setSort(activeState.state);
    } else {
      setSort("");
    }

    setOpen(false);
  };

  return (
    <>
      <Button
        className={cn(
          "border rounded-full gap-1",
          currentSort ? "text-blue-600 border-blue-600" : ""
        )}
        variant={"ghost"}
        onClick={() => setOpen(true)}
      >
        {currentSort ? currentSort : "정렬"}
        <ArrowDown
          className={cn("w-4 h-4", currentSort ? "text-blue-600" : "")}
        />
      </Button>
      <Modal
        title="정렬"
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="gap-5 py-5">
          {sortState.map((state, index) => (
            <div
              key={index}
              onClick={() => {
                setSortState((prev) =>
                  prev.map((item, i) => ({
                    ...item,
                    active: i === index ? !item.active : false,
                  }))
                );
              }}
              className={cn("flex justify-between px-5 py-2 rounded-full")}
            >
              {state.state}
              {state.active ? <Check className="text-blue-600" /> : ""}
            </div>
          ))}
        </div>
        <div className="flex justify-evenly space-x-10">
          <Button
            className="w-full"
            variant={"secondary"}
            onClick={() => setOpen(false)}
          >
            취소
          </Button>
          <Button className="w-full bg-blue-600" onClick={handleConfirm}>
            확인
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default SortModal;
