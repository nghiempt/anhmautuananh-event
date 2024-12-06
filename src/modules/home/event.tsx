"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Confirm from "./confirm";

export default function Event({ handleLogout, currentAccount, listNumber }: { handleLogout: any, currentAccount: any, listNumber: any }) {

  const { toast } = useToast()

  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentAccountExtract, setCurrentAccountExtract] = useState(null as any);
  const [availableNumbers, setAvailableNumbers] = useState<string[]>(
    Array.from({ length: 1000 }, (_, i) => String(i).padStart(3, "0"))
  );

  const renderNumberRegister = (number: string) => {
    let style = 'bg-gray-200 hover:bg-gray-300';
    listNumber?.forEach((num: any) => {
      if (num?.SO_DA_CHON.toString() === number.toString()) {
        if (num?.MA_KHACH_HANG.toString() === currentAccountExtract?.MA_KHACH_HANG.toString()) {
          style = 'bg-blue-500 text-white';
        } else {
          style = 'bg-gray-500 text-gray-300';
        }
      }
    });
    return style
  }

  const checkNumberRegister = (number: any) => {
    let check = false;
    listNumber?.forEach((num: any) => {
      if (num?.SO_DA_CHON.toString() === number.toString()) {
        check = true;
      }
    });
    return check
  }

  const checkNumberAccountChoice = () => {
    let tmp: any = [];
    listNumber?.forEach((num: any) => {
      if (num?.MA_KHACH_HANG.toString() === currentAccountExtract?.MA_KHACH_HANG.toString()) {
        tmp.push(num?.SO_DA_CHON)
      }
    });
    return tmp
  }

  const handleChooseNumber = (number: string) => {
    if (currentAccountExtract?.SO_LAN_CHON === 0) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Bạn đã hết lượt chọn số"
      })
    } else if (checkNumberRegister(number)) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Số đã được chọn"
      })
    } else {
      setSelectedNumber(number);
      setIsShowConfirm(true);
    }
  }

  useEffect(() => {
    const currentAccountExtract = currentAccount();
    setCurrentAccountExtract(currentAccountExtract);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center px-4 relative bg-gradient-to-t from-red-900 via-red-700 to-red-800">
      <Confirm isOpen={isShowConfirm} setIsOpen={setIsShowConfirm} number={selectedNumber} account={currentAccountExtract} />
      <div className="absolute top-10 right-10 cursor-pointer" onClick={handleLogout}>
        <LogOut color="#fff" />
      </div>
      <div className="mb-2 text-2xl font-bold mt-10 text-white">Xin chào, {currentAccountExtract?.TEN_KHACH_HANG}</div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-center items-center flex-wrap gap-2 mb-4 text-white">
          Số bạn đang sở hữu:
          {
            checkNumberAccountChoice().map((num: any, index: any) => (
              <span key={index} className="bg-blue-500 px-2 py-0.5 font-semibold rounded-md">{num}</span>
            ))
          }
        </div>
        <div className="mb-4 text-white">
          Bạn có {currentAccountExtract?.SO_LAN_CHON} lần được chọn số
        </div>
        <div className="mb-8">
          <Button
            onClick={() => window.open("https://zalo.me/g/bezacz477")}
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
          >
            Tham gia nhóm Zalo
          </Button>
        </div>
        <div className="text-white mb-10 text-center">
          Có bất cứ câu hỏi gì, hãy liên hệ 0941.826.556 (Mr. Thức)
        </div>
        <div className="w-full mb-8 flex flex-wrap gap-2 justify-center items-center">
          {availableNumbers.map((number: any) => (
            <button
              key={number}
              onClick={() => handleChooseNumber(number)}
              className={`rounded-md w-16 h-16 font-semibold ${renderNumberRegister(number)}`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}