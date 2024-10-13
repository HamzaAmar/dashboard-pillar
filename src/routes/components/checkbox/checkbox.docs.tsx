export const checkboxColor = `
import { Checkbox } from "@pillar-ui/core";

const CheckboxTest = ()=>{
    return(
        <Checkbox color="d" label="danger" />
        <Checkbox color="su" label="success" />
        <Checkbox color="se" label="purple" />
        <Checkbox color="i" label="indigo" />
        <Checkbox color="b" label="slate" />
        <Checkbox color="w" label="warning" />
    )
}`

export const defaultCheckedCheckbox = `
import { Checkbox } from "@pillar-ui/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox defaultChecked color="d" label="danger" />
      <Checkbox defaultChecked color="su" label="success" />
      <Checkbox defaultChecked color="se" label="purple" />
      <Checkbox defaultChecked color="i" label="indigo" />
      <Checkbox defaultChecked color="b" label="slate" />
      <Checkbox defaultChecked color="w" label="warning" />
    )
}`

export const checkboxDisabled = `
import { Checkbox } from "@pillar-ui/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox disabled defaultChecked color="d" label="danger" />
      <Checkbox disabled color="su" label="success" />
      <Checkbox disabled color="se" label="purple" />
      <Checkbox disabled color="i" label="indigo" />
      <Checkbox disabled color="b" label="slate" />
      <Checkbox disabled defaultChecked color="w" label="warning" />
    )
}`

export const checkboxSize = `
import { Checkbox } from "@pillar-ui/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox size="4" label="danger" />
      <Checkbox label="danger" />
      <Checkbox size="6" label="success" />
    )
}`

export const checkboxIsIndeterminate = `
import { Checkbox } from "@pillar-ui/core";
import useBoolean from "@hooks/useBoolean";

const CheckboxTest = ()=>{
    const { state, handleToggle } = useBoolean(false);
    const handleToggles = () => {
        setIsCheck([false, false, false]);
    };
    return(
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="4" label="Indeterminate" />
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="5" label="Indeterminate" />
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="6" label="Indeterminate" />
    )
}`

export const checkboxIsIndeterminateSecond = `
import { Checkbox } from "@pillar-ui/core";
import useBoolean from "@hooks/useBoolean";

const CheckboxTest = ()=>{
    const { state, handleToggle } = useBoolean(false);
    const allChecked = isCheck.every(Boolean);
    const isIndeterminate = isCheck.some(Boolean) && !allChecked;

    const handleToggles = () => {
        setIsCheck([false, false, false]);
    };

    const handleChecks =
    (name: string) => (event: FormEvent<HTMLInputElement>) => {
      const newArr = isCheck.map((val) => {
        return name === event.target.name ? !val : val;
      });
      setIsCheck(newArr);
    };

    return(
        <>
            <Checkbox checked={allChecked} isIndeterminate={isIndeterminate} onChange={handleToggles} label="Parent" />
            <Flex style={{ paddingInlineStart: "1rem" }} gap="5" direction="col" items="start" >
                <Checkbox checked={isCheck[0]} onChange={handleChecks("first")} label="first" name="first" />
                <Checkbox checked={isCheck[1]} onChange={handleChecks("second")} label="second" name="second" />
                <Checkbox checked={isCheck[2]} onChange={handleChecks("third")} label="third" name="third" />
            </Flex>
        </>
    )
}`
