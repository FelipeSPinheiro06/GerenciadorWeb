'use client'
import React, { MouseEventHandler } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

interface DropdownActionProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropdownAction({onEdit, onDelete}: DropdownActionProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown color="#000000"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem startContent={<Pencil size={18} color="#ffffff"/>} key="edit"><p className="text-white">editar</p></DropdownItem>
        <DropdownItem startContent={<Trash size={18}/>} key="delete" className="text-danger" color="danger">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}