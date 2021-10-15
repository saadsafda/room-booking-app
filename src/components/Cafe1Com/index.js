import { useParams } from "react-router-dom";
import BoxProps from "../CaffeiBoxs/BoxProps";

const Cafe1Com = () => {
  const { cafeId } = useParams();

  return (
    <div className="row">
      <BoxProps title="room for 4" http={`/cafe/${cafeId}/1`} />
      {cafeId == 1 && (
        <BoxProps title="room for 6" http={`/cafe/${cafeId}/2`} />
      )}
      {/* {cafeId == 1 && <BoxProps title="room 3" http={`/cafe/${cafeId}/3`} />} */}
    </div>
  );
};

export default Cafe1Com;
