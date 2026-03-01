"use client";
import { FaRobot } from "react-icons/fa";
import { useChat } from "ai/react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoSend } from "react-icons/io5";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatContainerRef = useRef<HTMLUListElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild className="">
        <Button className="" size={"icon"}>
          <FaRobot size={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mx-2 -mb-14 flex h-[500px] w-screen flex-col md:mb-0 md:w-[300px]">
        <h2 className="flex items-center gap-2 pb-4 font-bold">
          <FaRobot />
          Assistant
          <IoIosCloseCircleOutline
            className="ml-auto cursor-pointer"
            size={20}
            onClick={() => setIsOpen(false)}
          />
        </h2>

        <ul
          className="mb-4 flex flex-col gap-2 overflow-y-auto text-sm"
          ref={chatContainerRef}
        >
          {messages.map((message, index) => {
            return (
              <li
                key={index}
                className={`w-full rounded-lg border p-2 ${
                  message.role === "user" ? "bg-primary text-white" : ""
                }`}
              >
                <p className="flex items-center gap-2 py-1">
                  {message.role === "user" ? (
                    ""
                  ) : (
                    <>
                      <FaRobot />
                      Assistant
                    </>
                  )}
                </p>
                <p className="whitespace-pre-wrap break-words px-2 pb-2">
                  {message.content}
                </p>
              </li>
            );
          })}
          <div className="mt-auto">
            <p className="text-center italic">
              {isLoading && "Assistant is thinking..."}
              {messages.length === 0 && "Ask me about Jonathan!"}
              {error && error.message}
            </p>
          </div>
        </ul>

        <form onSubmit={handleSubmit} className="mt-auto flex w-full gap-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
          />
          <Button type="submit">
            <IoSend />
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default Chat;
