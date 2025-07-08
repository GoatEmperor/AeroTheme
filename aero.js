function toggleWindowCollapse(button, open) {
  const windowBox = button.closest('.aero-glass');
  const isCollapsed = windowBox.classList.contains('collapsed');

  if (typeof open === 'boolean') {
    if (open && isCollapsed) {
      windowBox.classList.remove('collapsed');
    } else if (!open && !isCollapsed) {
      windowBox.classList.add('collapsed');
    }
  } else {
    // If no argument, toggle normally
    windowBox.classList.toggle('collapsed');
  }
}

function closeWindow(button) {
  const windowBox = button.closest('.aero-glass');
  if (windowBox) {
    windowBox.style.display = 'none';
  }
}