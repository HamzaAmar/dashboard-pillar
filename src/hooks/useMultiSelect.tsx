// import { useCallback, useRef, useState } from 'react';
// import useBoolean from './useBoolean';

// export function useMultiSelect(options) {
//   const [values, setValues] = useState<string[]>([]);
//   const currentOptionRef = useRef<HTMLLIElement | null>(null);
//   const [currentOptionIndex, setCurrentOptionIndex] = useState(-1);
//   const { state: open, handleToggle, handleFalse } = useBoolean(false);

//   const selectedOptions = options.filter((o) => !values.includes(o.value));

//   function handleAdd(value: string) {
//     if (values.includes(value)) {
//       return;
//     }
//     setValues((values) => [...values, value]);
//   }

//   function handleRemove(event: MouseEvent, removedValue: string) {
//     event.stopPropagation();
//     const filteredValues = values.filter((value) => value !== removedValue);
//     setValues(filteredValues);
//   }

//   function handleClear() {
//     setValues([]);
//   }

//   const handleKeyDown = useCallback(
//     (event: React.KeyboardEvent<HTMLLIElement>) => {
//       switch (event.key) {
//         case 'ArrowUp':
//           event.preventDefault();
//           if (currentOptionIndex > 0) {
//             setCurrentOptionIndex(currentOptionIndex - 1);
//           }
//           break;
//         case 'ArrowDown':
//           event.preventDefault();
//           if (currentOptionIndex < selectedOptions.length - 1) {
//             setCurrentOptionIndex(currentOptionIndex + 1);
//           }
//           break;
//         case 'Enter':
//           if (currentOptionRef.current) {
//             currentOptionRef.current.click();
//           }
//           break;
//         case 'Escape':
//           handleFalse();
//           break;
//         case 'Tab':
//           handleFalse();
//           break;
//         default:
//           break;
//       }
//     },
//     [currentOptionIndex, selectedOptions]
//   );

//   return {
//     handleClear,
//     handleAdd,
//     handleRemove,
//     values,
//     open,
//     handleToggle,
//     handleKeyDown,
//   };
// }

export function useMultiSelect() {
  return true
}
