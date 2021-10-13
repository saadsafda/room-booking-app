import BoxProps from "./BoxProps";

const CaffeiBoxs = () => {
  return (
    <>
      <div style={{ margin: "0 20px 0 20px" }}>
        <div className="row">
          <BoxProps title="Cafe 1" http="/cafe/1" />
          <BoxProps title="Cafe 2" http="/cafe/2" />
          <BoxProps title="Cafe 3" http="/cafe/3" />
        </div>
      </div>
    </>
  );
};

export default CaffeiBoxs;
