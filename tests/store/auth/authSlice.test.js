import {
  authSlice,
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState } from "../../fixtures/authStates";
import { testUsercredentials } from "../../fixtures/testUser";

/* eslint-disable no-undef */
describe("Pruebas en authSlice", () => {
  test("debe regresar el estado inicial", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("debe realizar un login", () => {
    const state = authSlice.reducer(initialState, onLogin(testUsercredentials));
    expect(state).toEqual({
      status: "authenticated",
      user: testUsercredentials,
      errorMessage: undefined,
    });
  });

  test("debe realizar el logout", () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: undefined,
    });
  });

  test("debe realizar el logout", () => {
    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: errorMessage,
    });
  });

  test("debe limpiar el mensaje de error", () => {
    const errorMessage = "Credenciales no válidas";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    const newState = authSlice.reducer(state, clearErrorMessage());

    expect(newState.errorMessage).toBe(undefined);
  });

  test("debe realizar el checking", () => {
    const state = authSlice.reducer(authenticatedState, onChecking());
    expect(state).toEqual({
      status: "checking",
      user: {},
      errorMessage: undefined,
    });
  });
});
