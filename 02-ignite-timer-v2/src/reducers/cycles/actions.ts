import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_FINISH_CYCLE = 'MARK_FINISH_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markFinishCycleAction() {
  return {
    type: ActionTypes.MARK_FINISH_CYCLE,
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}
