import { FC } from "react";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGeneratePDF, onSuccessFunction } from "@/hooks/useGeneratePDF";
import type { HistoryFileType } from "@/hooks/useFilesHistory";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = zod.object({
  text: zod.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
});

interface TextFormInterface {
  setUrlToCurrentPDF: (data: HistoryFileType) => void;
}

const TextForm: FC<TextFormInterface> = ({ setUrlToCurrentPDF }) => {
  const { mutate, isPending } = useGeneratePDF();

  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit({ text }: zod.infer<typeof FormSchema>) {
    mutate(text, {
      onSuccess: (data) => onSuccessFunction(data, setUrlToCurrentPDF),
      onError: (error) => console.log("Error generating PDF:", error),
    });
  }

  return (
    <Card className="w-[350px] h-[436px]">
      <CardHeader>
        <CardTitle>Create PDF file </CardTitle>
        <CardDescription>
          Enter the text and we will convert it to a file.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit" loading={isPending}>
              Convert to PDF
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default TextForm;
