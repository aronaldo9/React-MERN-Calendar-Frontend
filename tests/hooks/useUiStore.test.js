import { act, renderHook } from "@testing-library/react";
import { useUiStore } from "../../src/hooks/useUiStore";
import { Provider } from "react-redux";
import { uiSlice } from "../../src/store";
import { configureStore } from "@reduxjs/toolkit";

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState },
    },
  });
};

/* eslint-disable no-undef */
describe("Pruebas en useUiStore", () => {
  test("debe regresar los valores por defecto", () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      toggleDateModal: expect.any(Function),
    });
  });

  test("openDateModal debe colocar en true el isDateModalOpen", () => {
    const mockStore = getMockStore({ isDateModalOpen: false });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    const { openDateModal } = result.current;

    act(() => {
      openDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test("closeDateModal debe poner en false el isDateModalOpen", () => {
    const mockStore = getMockStore({ isDateModalOpen: true });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    act(() => {
      result.current.closeDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();
  });

  test("toggleDateModal debe cambiar el estado respectivamente", () => {
    const mockStore = getMockStore({ isDateModalOpen: true });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    });

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });
});
