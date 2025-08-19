
// DELETE booking (admin-only)
router.delete("/:id", async (req, res) => {
  console.log(`📢 DELETE /api/bookings/${req.params.id} request received`);

  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // ✅ Allow deletion regardless of date
    await booking.deleteOne();

    console.log(`✅ Booking deleted: ${req.params.id}`);

    res.json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (err) {
    console.error("🔥 Delete error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
