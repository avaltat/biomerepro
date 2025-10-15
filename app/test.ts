import { useCallback } from 'react';

export const useTestBiome = (
  state: {
    closingBehavior: 'canBeClosed' | 'cantBeClosed';
    onClose?: () => Promise<unknown>;
  } | null,
) => {
  const foo = useCallback(async () => {
    if (state?.closingBehavior && state.closingBehavior !== 'cantBeClosed') {
      if (state.onClose) await state.onClose();


    }
  }, [state?.closingBehavior, state?.onClose]);

  const {onClose, closingBehavior} = state||{};

  const bar = useCallback(async () => {
    if (closingBehavior && closingBehavior !== 'cantBeClosed') {
      if (onClose) await onClose();


    }
  }, [closingBehavior, onClose]);


  return {foo, bar};

};

