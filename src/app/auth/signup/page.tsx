'use client';

import Image from 'next/image';
import { defineOneEntry } from "oneentry";

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { FormField } from '@/typings';
import { ISignUpData } from 'oneentry/dist/auth-provider/authProvidersInterfaces';

const { Forms, AuthProvider } = defineOneEntry(process.env.NEXT_PUBLIC_ONEENTRY_DOMAIN as string, { token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN })

export default function SignupPage() {
    const [formField, setFormField] = useState<FormField[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        password: '',
        phone: '',
        address: '',
    });

    useEffect(() => {
        const oneEntry = async () => {
            const value = await Forms.getFormByMarker('sign-up-form', 'en_US');
            const formFields = value.attributes.filter((field: FormField) => field.marker !== 'role');
            setFormField(formFields);
        }
        oneEntry();
        setIsLoading(false);
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, marker: string) => {
        const { value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [marker]: value
        }));
    }

    const sendUserData = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {

            const value = await Forms.getFormByMarker('sign-up-form', 'en_US')
            console.log('value', value);
            const data: ISignUpData = {
                formIdentifier: "sign-up-form",
                authData: [
                    {
                        marker: "email",
                        value: userData.email
                    },
                    {
                        marker: "password",
                        value: userData.password
                    },
                ],
                formData: [
                    {
                        marker: "name",
                        type: "string",
                        value: userData.name
                    },
                    {
                        marker: "phone",
                        type: "string",
                        value: userData.phone
                    },
                    {
                        marker: "address",
                        type: "string",
                        value: userData.address
                    },
                ],
                notificationData: {
                    email: "test@test.zone",
                    phonePush: [],
                    phoneSMS: "+19991234567"
                }
            }

            console.log("✅ authData:", data.authData);

            const response = await AuthProvider.signUp('email', data);

            if (response.isActive) {
                window.location.href = '/auth/login';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }

    }


    return (
        <>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <div className={cn('flex flex-col gap-6')}>
                        {isLoading ? <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-8 w-8 border-4 border-muted border-t-primary"></div>
                        </div> : <Card className="overflow-hidden p-0">
                            <CardContent className="grid p-0 md:grid-cols-2">
                                <form className="p-6 md:p-8" onSubmit={sendUserData}>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col items-center text-center">
                                            <h1 className="text-2xl font-bold">Create an account</h1>
                                            <p className="text-sm text-muted-foreground text-balance">
                                                Enter your email below to create your account
                                            </p>
                                        </div>

                                        {formField.map((field, index) => (
                                            <div key={index} className="grid gap-3">
                                                <Label htmlFor={field.localizeInfos.title} className='capitalize'>{field.marker}</Label>
                                                <Input
                                                    id={field.localizeInfos.title}
                                                    type={field.marker === 'password' ? 'password' : 'text'}
                                                    placeholder={field.localizeInfos.title}
                                                    required
                                                    onChange={(e) => handleChange(e, field.marker)}
                                                />
                                            </div>
                                        ))}
                                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                                        </svg>
                                                        Signing up...
                                                    </>
                                                ) : (
                                                    'Signup'
                                                )}
                                        </Button>
                                    </div>
                                </form>
                                <div className="bg-muted relative hidden md:block">
                                    <Image
                                        src="/bg-signup.avif"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        objectFit="cover"
                                        alt="login_bg"
                                    />
                                </div>
                            </CardContent>
                        </Card>}
                        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                            By clicking continue, you agree to our <a href="#">Terms of Service</a> and{' '}
                            <a href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
