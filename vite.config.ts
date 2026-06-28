import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // هذا السطر يخبر Vite أن مسارات الملفات يجب أن تكون نسبية وليست مطلقة
  base: './' 
})
