import { useState } from 'react'
import { Pagination } from '@phenom/design-system-jsx'
import './App.css'

function App() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: 24 }}>Pagination test</h1>
      <Pagination
        currentPage={page}
        totalPages={12}
        onPageChange={setPage}
        pageSizeOptions={[10, 25, 50]}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
      <div style={{ marginTop: 24 }}>
        <p>Current page: {page}</p>
        <p>Page size: {pageSize}</p>
      </div>
    </div>
  )
}

export default App
