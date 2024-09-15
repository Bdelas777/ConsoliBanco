"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";
import { SendIcon, SquareIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/conversation",
    });

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Función para enviar el mensaje al presionar "Enter"
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Evita que se agregue un salto de línea
      handleSubmit(e as any);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-success-50 rounded-lg shadow-lg">
      <div className="flex-1 overflow-auto p-6">
        {messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <Image src="/ai.png" alt="AI" width={80} height={80} />
            <p className="text-lg text-muted-foreground mt-4 text-center">
              Bienvenido al apartado de dudas, ¿en qué te puedo apoyar?
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4">
          {messages.map((message) =>
            message.role === "assistant" ? (
              <div key={message.id} className="flex items-start gap-3">
                <div className="p-2 border border-gray-500 rounded-full">
                  <Image src="/ai.png" alt="AI" width={20} height={20} />
                </div>
                <div className="bg-black-1 rounded-lg p-4 max-w-[70%]">
                  <Markdown className="text-sm text-white">
                    {message.content}
                  </Markdown>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-end">
                <div className="bg-bankGradient rounded-lg p-4 max-w-[70%]">
                  <p className="text-sm text-primary-foreground">
                    {message.content}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 px-4 py-3 flex items-center gap-2"
      >
        <div className="relative flex-1">
          <Textarea
            ref={inputRef}
            placeholder="Escribe tu duda..."
            className="rounded-lg pr-12 min-h-[64px] max-h-[150px] resize-none"
            rows={1}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress} // Añadimos el evento para detectar "Enter"
          />

          {!isLoading ? (
            <Button
              type="submit"
              size="icon"
              disabled={!input || isLoading}
              className="absolute bottom-3 right-3 rounded-full"
            >
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Enviar</span>
            </Button>
          ) : (
            <Button
              type="button"
              size="icon"
              disabled={!isLoading}
              onClick={stop}
              className="absolute bottom-3 right-3 rounded-full"
            >
              <SquareIcon className="w-5 h-5" fill="white" />
              <span className="sr-only">Cancelar</span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
