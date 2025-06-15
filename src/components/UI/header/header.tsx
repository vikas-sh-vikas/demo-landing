"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  IconButton,
  List, 
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const locale = useLocale();
  const handleLanguageChange = (newLocale: "en" | "ar") => {
    if (newLocale !== locale) {
      router.push(`/${newLocale}`); // Navigate to new locale path
      setLang(newLocale); // Update dropdown value
    }
  };

  const t = useTranslations("header");
  const navItems = [t("0"), t("1"), t("2"), t("3"), t("4"), t("5"), t("6"),t("7")];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar">(locale as "en" | "ar");
  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Sticky top header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex gap-3">
              <div className="lg:hidden block m-auto">
                {/* Hamburger on mobile */}
                <IconButton
                  className="md:hidden"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open menu"
                >
                  <FaBars size={20} />
                </IconButton>
                {/* Mobile drawer */}
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{ className: "w-64 p-4" }}
                >
                  <Box className="flex justify-between items-center mb-4">
                    <Image alt="logo" src="/mad3wo_logo.svg" width={70} height={70} />
                    {/* <div className="text-2xl font-bold">Mad3wo</div> */}

                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <FaTimes size={20} />
                    </IconButton>
                  </Box>

                  <List>
                    {navItems.map((text: string) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            setDrawerOpen(false);
                            handleScroll(text);
                          }}
                          className="rounded-md text-gray-600 mb-1 hover:bg-[#BF9D84] hover:text-white transition"
                        >
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </div>
              <div className="">
                 <Image
                  alt="logo"
                  src="/mad3wo_logo.svg"
                  width={70}
                  height={70}
                  priority
                /> 
                {/* <div className="text-2xl font-bold">Mad3wo</div> */}
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <nav className="justify-center gap-2 col-span-4 bg-white border border-gray-200 shadow-[0_4px_6px_-2px_#BF9D84] rounded-full px-8 py-3 items-center transition-shadow duration-200 ease-in-out hidden lg:flex space-x-4">
            {navItems.map((item: string) => (
              <div
                key={item}
                onClick={() => handleScroll(item)}
                className="text-[14px] xl:text-[18px] text-gray-600 hover:text-white hover:bg-[#BF9D84] px-2 py-1 rounded-full cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center space-x-2">
            {/* Language selector (hidden on xs) */}
            <div className="w-24">
              <FormControl fullWidth size="small">
                <InputLabel id="lang-select-label">Lang</InputLabel>
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  value={lang}
                  label="Lang"
                  onChange={(e) =>
                    handleLanguageChange(e.target.value as "en" | "ar")
                  }
                >
                  <MenuItem value="en">ENG</MenuItem>
                  <MenuItem value="ar">AR</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
