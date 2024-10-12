export const TooltipPlacementDocs = `
import {  Heading, IconButton, Tooltip } from "@components/core";

const TooltipPlacement = () =>{
    <div
        style={{
            width: "100%",
            height: "50vh",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            placeItems: "center",
        }}
    >
        <Tooltip title="Warning" placement="top-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="top-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="top-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>

        <Tooltip title="Warning" placement="right-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="right-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="right-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>

        <Tooltip title="Warning" placement="bottom-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="bottom-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="bottom-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="left-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="left-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
        <Tooltip title="Warning" placement="left-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
        </Tooltip>
    </div>
}

export default TooltipPlacement
`
