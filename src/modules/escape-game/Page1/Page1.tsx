import React, { useState } from "react";

import { TextInput } from "../../common-ui/TextInput";

import styles from "./styles.module.scss";

export const Page1 = () => {
  const [form, setForm] = useState({ name: "" });
  return (
    <div className={styles.page}>
      Page 1
      <TextInput
        value={form.name}
        description="Nom"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
    </div>
  );
};
