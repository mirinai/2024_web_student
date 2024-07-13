import { Slider } from "@mui/material";

const ClassContents = () => {
  return (
    <>
      <div className="text-7xl text-center mb-10">수업명</div>
      <div className="px-80 flex gap-10">
        {/* 수업횟수 */}
        <div className="w-96 h-fit p-5 bg-neutral-100">
          <div className="my-3 flex justify-between items-end">
            <div className="font-black text-2xl">수업진행률</div>
            <div className="text-sm">50%</div>
          </div>
          <Slider
            disabled
            size="small"
            defaultValue={50}
            aria-label="수업횟수"
          />
        </div>

        {/* 출석률 */}
        <div className="w-96 h-fit p-5 bg-neutral-100">
          <div className="my-3 flex justify-between items-end">
            <div className="font-black text-2xl">학생 출석률</div>
            <div className="text-sm">50%</div>
          </div>
          <Slider disabled size="small" defaultValue={50} aria-label="출석률" />
        </div>

        {/* 수강한 학생 정보 (삭제가능) */}
      </div>
    </>
  );
};

export default ClassContents;
