"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import { useRouter } from 'next/navigation';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { createProductSchema, CreateProductInput } from "./dto";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";


export function SheetDemo() {
    const { toast } = useToast()
    const form = useForm<CreateProductInput>({
        resolver: zodResolver(createProductSchema),
        mode: "onChange",
    });

    const router = useRouter();

    const onSubmit = async (data: CreateProductInput) => {

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error("Error saving product:", errorBody);
                throw new Error('Failed to create product');
            }
            
            router.refresh();

            toast({
                title: "Success",
                description: "Product created successfully",
                variant: "default",
            });

            // Reset form or close sheet here
            form.reset();

        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to create product. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Add Product</Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Add Product</SheetTitle>
                    <SheetDescription>
                        Enter the product details below.
                    </SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="name">Name</Label>
                                    <FormControl>
                                        <Input placeholder="Plumbus-X" className="border-transparent bg-muted shadow-none" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description Field */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="description">Description</Label>
                                    <FormControl>
                                        <Input placeholder="First they take the dinglebop..." className="border-transparent bg-muted shadow-none" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Price Field */}
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="price">Price</Label>
                                    <FormControl>
                                        <div className="flex rounded-lg shadow-sm">
                                            <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="199.99"
                                                className="z-[1] -me-px rounded-e-none border-transparent bg-muted shadow-none"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            <span className="z-[0] inline-flex items-center rounded-e-lg border-input bg-muted px-3 text-sm text-muted-foreground">
                                                EUR
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Weight Field */}
                        <FormField
                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="weight">Weight</Label>
                                    <FormControl>
                                        <div className="flex rounded-lg shadow-sm">
                                            <Input
                                                type="number"
                                                step="0.01"
                                                placeholder="3000"
                                                className="z-[1] -me-px rounded-e-none border-transparent bg-muted shadow-none"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            <span className="z-[0] inline-flex items-center rounded-e-lg border-input bg-muted px-3 text-sm text-muted-foreground">
                                                kg
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Category Name Field */}
                        <FormField
                            control={form.control}
                            name="categoryName"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="categoryName">Category</Label>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="border-transparent bg-muted shadow-none">
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="books">Books</SelectItem>
                                            <SelectItem value="clothing">Clothing</SelectItem>
                                            <SelectItem value="electronics">Electronics</SelectItem>
                                            <SelectItem value="toys">Toys</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Stock Field */}
                        <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="stock">Stock</Label>
                                    <FormControl>
                                        <div className="flex rounded-lg shadow-sm">
                                            <Input
                                                type="number"
                                                placeholder="69"
                                                className="z-[1] -me-px rounded-e-none border-transparent bg-muted shadow-none"
                                                {...field}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            <span className="z-[0] inline-flex items-center rounded-e-lg  border-input bg-muted px-3 text-sm text-muted-foreground">
                                                pcs
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <SheetFooter >
                            {form.formState.isValid ? (
                                <SheetClose asChild>
                                    <div className="relative mt-4">
                                    <ConfettiButton
                                        triggerConfetti={form.formState.isValid}
                                        variant="secondary"
                                        type="submit"
                                        options={{
                                            get angle() {
                                                const screenWidth = window.innerWidth;
                                                const screenHeight = window.innerHeight;
                                                const angleRad = Math.atan(screenHeight / screenWidth);
                                                const angleDeg = angleRad * (180 / Math.PI);
                                                const finalAngle = 180 - (1.6 * angleDeg);
                                                console.log(`Angle (Degrees): ${finalAngle}, Width: ${screenWidth}, Height: ${screenHeight}`);
                                                return finalAngle;
                                            },
                                        }}
                                    >
                                        Save Product
                                    </ConfettiButton>
                                    </div>
                                </SheetClose>
                            ) : (
                                <ConfettiButton
                                    triggerConfetti={form.formState.isValid}
                                    variant="secondary"
                                    type="submit"
                                    
                                >
                                    Save Product
                                </ConfettiButton>
                            )}
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}