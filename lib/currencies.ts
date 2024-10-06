export const Currencies=[
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    { value: "INR", label: "₹ Indian Rupee", locale: "en-IN" },
    { value: "EUR", label: "€ Euro", locale: "en-EU" },
    { value: "JPY", label: "¥ Japanese Yen", locale: "ja-JP" },
    { value: "GBP", label: "£ British Pound", locale: "en-GB" }
]

export type Currency= (typeof Currencies)[0];