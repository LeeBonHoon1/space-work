import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { stateStore } from "../../store/state-store";

import { Button } from "../ui/button";
import Modal from "../modal";

const StateModal = () => {
  const [sortState, setSortState] = useState([
    {
      state: "전체",
      active: false,
    },
    {
      state: "open",
      active: false,
    },
    {
      state: "close",
      active: false,
    },
  ]);
  const { currentState, setState } = stateStore();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    const activeState = sortState.find((state) => state.active);

    if (activeState) {
      setState(activeState.state);
    } else {
      setState("");
    }

    setOpen(false);
  };

  return (
    <>
      <Button
        className={cn(
          "border rounded-full gap-1",
          currentState ? "text-blue-600 border-blue-600" : ""
        )}
        variant={"ghost"}
        onClick={() => setOpen(true)}
      >
        {currentState ? currentState : "이슈 상태"}
        <ArrowDown
          className={cn("w-4 h-4", currentState ? "text-blue-600" : "")}
        />
      </Button>
      <Modal
        title="이슈 상태"
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="flex gap-5 py-5">
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
              className={cn(
                "border border-slate-300 px-5 py-2 rounded-full",
                state.active ? "bg-blue-600 text-white" : ""
              )}
            >
              {state.state}
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
            적용
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default StateModal;
