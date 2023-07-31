import { Profiler, useDeferredValue, useMemo, useState } from "react";

// not pure way
const onRender = (
  id, //: string,
  phase, //: "mount" | "update",
  actualDuration, //: number,
  baseDuration, //: number,
  startTime, //: number,
  commitTime, //: number,
  interactions //: Set<SchedulerInteraction>,
) => {
  console.log(
    id, //: string,
    phase, //: "mount" | "update",
    actualDuration, //: number,
    baseDuration, //: number,
    startTime, //: number,
    commitTime, //: number,
    interactions
  );
};

//defered
function TestStressComponentDefered() {
  const [count, setCount] = useState(0);
  const deferedCount = useDeferredValue(count);

  const memoList = useMemo(() => {
    let list = [];
    for (let i = 0; i < 100000; i++) {
      list = [];
      for (let j = 0; j < 1000; j++) {
        list.push(j);
      }
      // list.push(i);
    }
    return list.map((i, index) => (
      <div key={index} className="flexContainer">
        {index + 1}
        <input
          value={deferedCount}
          type="number"
          onChange={() => setCount((count) => count + 1)}
          name={"input" + i}
        />
      </div>
    ));
  }, [deferedCount]);

  return (
    <section>
      <h1>Test Performatnce with profiler ... </h1>
      <button onClick={() => setCount((count) => count + 1)}>
        re render : {count}
      </button>

      <div
        className="flexContainer"
        style={{ maxHeight: "256px", overflowY: "auto" }}
      >
        {memoList}
      </div>
    </section>
  );
}

export function ProfilerComponentDefered() {
  return (
    <Profiler id="ProfilerComponentDefered" onRender={onRender}>
      <TestStressComponentDefered />
    </Profiler>
  );
}

export default function ProfilerComponent() {
  const [count, setCount] = useState(0);
  let list = [];
  for (let i = 0; i < 10000; i++) {
    list.push(i);
  }

  return (
    <Profiler id="ProfilerComponent" onRender={onRender}>
      <section>
        <h1>Test Performatnce with profiler ... </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          re render : {count}
        </button>

        <div
          className="flexContainer"
          style={{ maxHeight: "256px", overflowY: "auto" }}
        >
          {list.map((i, index) => (
            <div key={index} className="flexContainer">
              {index + 1}
              <input
                value={count}
                type="number"
                onChange={() => setCount((count) => count + 1)}
                name={"input" + i}
              />
            </div>
          ))}
        </div>
      </section>
    </Profiler>
  );
}
