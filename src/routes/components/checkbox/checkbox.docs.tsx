export const checkboxColor = `
import { Checkbox } from "@components/core";

const CheckboxTest = ()=>{
    return(
        <Checkbox color="danger" label="danger" />
        <Checkbox color="success" label="success" />
        <Checkbox color="purple" label="purple" />
        <Checkbox color="indigo" label="indigo" />
        <Checkbox color="slate" label="slate" />
        <Checkbox color="warning" label="warning" />
    )
}`

export const defaultCheckedCheckbox = `
import { Checkbox } from "@components/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox defaultChecked color="danger" label="danger" />
      <Checkbox defaultChecked color="success" label="success" />
      <Checkbox defaultChecked color="purple" label="purple" />
      <Checkbox defaultChecked color="indigo" label="indigo" />
      <Checkbox defaultChecked color="slate" label="slate" />
      <Checkbox defaultChecked color="warning" label="warning" />
    )
}`

export const checkboxDisabled = `
import { Checkbox } from "@components/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox disabled defaultChecked color="danger" label="danger" />
      <Checkbox disabled color="success" label="success" />
      <Checkbox disabled color="purple" label="purple" />
      <Checkbox disabled color="indigo" label="indigo" />
      <Checkbox disabled color="slate" label="slate" />
      <Checkbox disabled defaultChecked color="warning" label="warning" />
    )
}`

export const checkboxSize = `
import { Checkbox } from "@components/core";

const CheckboxTest = ()=>{
    return(
      <Checkbox size="sm" label="danger" />
      <Checkbox label="danger" />
      <Checkbox size="lg" label="success" />
    )
}`

export const checkboxIsIndeterminate = `
import { Checkbox } from "@components/core";
import useBoolean from "@hooks/useBoolean";

const CheckboxTest = ()=>{
    const { state, handleToggle } = useBoolean(false);
    const handleToggles = () => {
        setIsCheck([false, false, false]);
    };
    return(
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="sm" label="Indeterminate" />
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="md" label="Indeterminate" />
      <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="lg" label="Indeterminate" />
    )
}`

export const checkboxIsIndeterminateSecond = `
import { Checkbox } from "@components/core";
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
            <Flex style={{ paddingInlineStart: "1rem" }} gap="md" direction="column" items="start" >
                <Checkbox checked={isCheck[0]} onChange={handleChecks("first")} label="first" name="first" />
                <Checkbox checked={isCheck[1]} onChange={handleChecks("second")} label="second" name="second" />
                <Checkbox checked={isCheck[2]} onChange={handleChecks("third")} label="third" name="third" />
            </Flex>
        </>
    )
}`
