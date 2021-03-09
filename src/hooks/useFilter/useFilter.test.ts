import { act, renderHook } from "@testing-library/react-hooks/dom";
import prepareMockReduxWrapper from "../../lib/prepareMockReduxWrapper";
import { filterActions } from "../../modules/filter";
import { useFilter } from "./useFilter";

describe("useFilter", () => {
  const setup = () => {
    const [wrapper, store] = prepareMockReduxWrapper({
      filter: "ALL",
      todos: [],
    });
    const { result } = renderHook(() => useFilter(), { wrapper });
    return { wrapper, store, result };
  };
  it("returns filter", () => {
    const { result } = setup();
    expect(result.current[0]).toEqual("ALL");
  });
  it("returns filter", () => {
    const { store, result } = setup();
    // applyFilter 함수를 호출하고
    act(() => {
      result.current[1]("DONE");
    });
    // 해당 액션이 디스패치 됐는지 확인
    expect(store.getActions()).toEqual([filterActions.applyFilter("DONE")]);
  });
});
