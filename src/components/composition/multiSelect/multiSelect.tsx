// import { useId } from "react";
// import { ChevronDown, Cross } from "@pillar-ui/icons";
// import { Flex, Text } from "@pillar-ui/core";
// import type { MultiSelectProps } from "./multiSelect.type";
// import { useMultiSelect } from "@hooks/useMultiSelect";

// const MultiSelect = ({ options, color = "slate" }: MultiSelectProps) => {
//   const {
//     values,
//     handleAdd,
//     handleClear,
//     handleRemove,
//     open,
//     handleToggle,
//     handleKeyDown,
//     selectedOptions,
//   } = useMultiSelect(options);
//   // const ref = useClickOutside(handleFalse);
//   const id = useId();
//   const listId = `listbox-${id}`;

//   const tags = values.map((value) => (
//     <Flex gap="1" className="multiselect--selected-item-wrapper">
//       <span className="multiselect--selected-item">{value}</span>

//       <Flex
//         as="button"
//         justify="center"
//         items="center"
//         className="multiselect--close-button"
//         onClick={(e) => handleRemove(e, value)}
//         type="button"
//       >
//         {<Cross width={10} />}
//       </Flex>
//     </Flex>
//   ));

//   return (
//     <div
//       // ref={ref}
//       className={`multiselect--wrapper u_${color}`}
//     >
//       <Flex
//         onClick={handleToggle}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         aria-controls={listId}
//         justify="between"
//         items="center"
//         gap="3"
//         className="multiselect"
//       >
//         <Flex gap="3" justify="between" wrap>
//           {tags}
//           <input type="search" />
//         </Flex>
//         <div>
//           <button onClick={handleClear} type="button">
//             <Cross width={12} />
//           </button>
//           <ChevronDown width={16} />
//         </div>
//       </Flex>
//       {open ? (
//         <ul
//           id={listId}
//           role="listbox"
//           aria-label="Select one or more options"
//           aria-multiselectable={true}
//           className="multiselect--list"
//           aria-activedescendant={
//             currentOptionIndex !== -1 ? selectedOptions[currentOptionIndex] : ""
//           }
//         >
//           {!selectedOptions.length ? (
//             <li>
//               <Text size="4" className="multiselect--item">
//                 The list Is Empty
//               </Text>
//             </li>
//           ) : null}

//           {selectedOptions.map(({ value, label }, index) => (
//             <li
//               key={value}
//               aria-label={label}
//               onKeyDown={handleKeyDown}
//               tabIndex={index === currentOptionIndex ? 0 : -1}
//             >
//               <Text
//                 onClick={() => handleAdd(value)}
//                 size="4"
//                 className="multiselect--item"
//               >
//                 {label}
//               </Text>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };

// export default MultiSelect;

const MultiSelect = () => {
  return (
    <ul>
      <li>hello</li>
    </ul>
  )
}

export default MultiSelect
