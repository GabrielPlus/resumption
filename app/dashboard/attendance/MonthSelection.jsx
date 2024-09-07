"use client";

import { React, useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { addMonths } from "date-fns";
import moment from "moment/moment";
import { Calendar } from "@/components/ui/calendar";
import { MdCalendarMonth } from "react-icons/md";

function MonthSelection({ selectedMonth }) {
  const [isMounted, setIsMounted] = useState(false);
  const [month, setMonth] = useState(addMonths(new Date(), 0));

  // Ensure this component only renders on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Avoid rendering on the server-side
    return null;
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button>
            <MdCalendarMonth className="h-6 w-6" />
            {moment(month).format("MMM yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            month={month}
            onMonthChange={(value) => {
              selectedMonth(value);
              setMonth(value);
            }}
            className="flex flex-1 justify-center"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MonthSelection;
