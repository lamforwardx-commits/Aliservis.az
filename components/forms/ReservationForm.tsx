"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full min-h-11 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export function ReservationForm() {
  const t = useTranslations("reservations");
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("errors.name")).max(80),
        phone: z
          .string()
          .min(7, t("errors.phone"))
          .max(20)
          .regex(/^[+\d\s()-]+$/, t("errors.phone")),
        email: z.string().email(t("errors.email")),
        guests: z.string().min(1, t("errors.guests")),
        date: z.string().min(1, t("errors.date")),
        time: z.string().min(1, t("errors.time")),
        message: z.string().max(500, t("errors.message")).optional(),
      }),
    [t],
  );

  type Values = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      guests: "2",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async (data: Values) => {
    await new Promise((r) => setTimeout(r, 700));
    console.info("Reservation request", data);
    setSubmitted(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass grid gap-4 rounded-[1.5rem] p-4 sm:gap-5 sm:rounded-[2rem] sm:p-6 md:grid-cols-2 md:p-8"
      noValidate
    >
      <Field label={t("fields.name")} error={errors.name?.message}>
        <input
          {...register("name")}
          autoComplete="name"
          className={fieldClass}
          placeholder={t("fields.namePh")}
        />
      </Field>

      <Field label={t("fields.phone")} error={errors.phone?.message}>
        <input
          {...register("phone")}
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder={t("fields.phonePh")}
        />
      </Field>

      <Field
        label={t("fields.email")}
        error={errors.email?.message}
        className="md:col-span-2"
      >
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder={t("fields.emailPh")}
        />
      </Field>

      <Field label={t("fields.guests")} error={errors.guests?.message}>
        <select {...register("guests")} className={fieldClass} defaultValue="2">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? t("fields.guest") : t("fields.guestsLabel")}
            </option>
          ))}
        </select>
      </Field>

      <Field label={t("fields.date")} error={errors.date?.message}>
        <input {...register("date")} type="date" className={fieldClass} />
      </Field>

      <Field label={t("fields.time")} error={errors.time?.message}>
        <input {...register("time")} type="time" className={fieldClass} />
      </Field>

      <Field
        label={t("fields.message")}
        error={errors.message?.message}
        className="md:col-span-2"
      >
        <textarea
          {...register("message")}
          rows={4}
          className={cn(fieldClass, "min-h-[120px] resize-none")}
          placeholder={t("fields.messagePh")}
        />
      </Field>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? t("sending") : t("submit")}
        </Button>
        {submitted ? (
          <p className="mt-4 text-sm text-gold" role="status">
            {t("success")}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
