"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from '@/app/lib/schema';
import { Input } from './ui/input';


const CreateAccountDrawer = ({children}) => {

    const [open, setOpen] = useState(false)
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      watch,
      reset,
    } = useForm({
      resolver: zodResolver(accountSchema),
      defaultValues: {
        name: "",
        type: "CURRENT",
        balance: "",
        isDefault: false,
      },
    });



  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        </DrawerHeader>
        <div>
          <form>
            <div>
              <label htmlFor="name">Account Name</label>
              <Input
                id="name"
                placeholder="e.g., Main Checking"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CreateAccountDrawer;