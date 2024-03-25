import React, { SetStateAction } from "react";

const tipOptions = [
  {
    id: "tipOption-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tipOption-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tipOption-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: React.Dispatch<SetStateAction<number>>;
  tip: number;
};

function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form className="mt-2">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-4">
            <label htmlFor={tipOption.id} className="font-semibold">
              {tipOption.label}
            </label>
            <input
              type="radio"
              id={tipOption.id}
              name="tipOption"
              value={tipOption.value}
              onChange={(e) => setTip(Number(e.target.value))}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPercentageForm;
