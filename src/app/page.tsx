export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f9ff',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: 'bold', 
        color: '#1e40af',
        marginBottom: '1rem'
      }}>
        🎉 NazzleNest纳乐适
      </h1>
      <p style={{ 
        fontSize: '1.5rem', 
        color: '#64748b',
        marginBottom: '2rem'
      }}>
        Hello World! 网站部署测试成功！
      </p>
      <div style={{ 
        padding: '1rem 2rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        borderRadius: '9999px',
        fontSize: '1.25rem',
        fontWeight: '600'
      }}>
        ✅ 推送成功 | ✅ 部署成功 | ✅ 访问成功
      </div>
      <p style={{ 
        marginTop: '2rem',
        fontSize: '1rem',
        color: '#94a3b8'
      }}>
        当前时间: {new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
      </p>
    </div>
  );
}
