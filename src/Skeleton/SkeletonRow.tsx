import React from "react";
import Skeleton from "./Skeleton";

const SkeletonRow: React.FC = () => {
  return (
    <div className="row">
      <div className="row__header">
        <div className="row__title">
          <Skeleton
            width={140}
            height={40}
            marginBottom={10}
            borderRadius={10}
          />
        </div>
      </div>
      <div className={`row__container`}>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
        <div>
          <Skeleton
            width={170}
            height={170}
            marginBottom={10}
            borderRadius={10}
          />
          <Skeleton width={170} height={18} marginBottom={10} />
          <Skeleton width={170} height={18} marginBottom={10} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonRow;
