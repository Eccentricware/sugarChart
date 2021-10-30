from datetime import datetime, timedelta, date
import pytz
from rest_framework import generics, permissions, renderers
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import action
from readings.models import Reading
from readings.serializers import ReadingSerializer
from readings.permissions import IsAdminOrCurrentUser

class ReadingList(generics.ListCreateAPIView):
  #queryset = Reading.objects.all()
  def get_queryset(self):
    if self.request.user.is_staff == True:
      return Reading.objects.all()
    elif not self.request.user.is_anonymous:
      user_id = self.request.user.id
      return Reading.objects.filter(user_id=user_id)
    else:
      return
  serializer_class = ReadingSerializer
  permissions_classes = (
    IsAdminOrCurrentUser
  )

  @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
  def perform_create(self, serializer):
    entered_date = self.request.data["observed_date"]
    year = int(entered_date[0:4])
    month = int(entered_date[5:7])
    day = int(entered_date[8:10])

    # For the age calculation
    observed_date = date(year, month, day)

    entered_time = self.request.data["observed_time"]
    hour = int(entered_time[0:2])
    minute = int(entered_time[3:5])
    second = 0

    naive_datetime = datetime(year, month, day, hour, minute, second)
    tz = self.request.user.details.timezone
    tz_datetime = pytz.timezone(tz).localize(naive_datetime)
    #print(tz_datetime)

    date_of_birth = self.request.user.details.date_of_birth
    #print(date_of_birth)
    # birth_year = int(date_of_birth)
    # birth_month = int(date_of_birth)
    # birth_day = int(date_of_birth)
    # birth_date = datetime(birth_year, birth_month, birth_day)
    age_delta = observed_date - date_of_birth
    age = age_delta.days / 365
    #print(age)

    serializer.save(
      user_id=self.request.user.id,
      weight_at_reading=self.request.user.details.weight,
      age_at_reading=age,
      observed_datetime=tz_datetime
    )


class ReadingListTimeSpan(generics.ListCreateAPIView):
  def get_queryset(self):
    naive_now = datetime.utcnow()
    now = pytz.utc.localize(naive_now)
    days_ago = self.kwargs['days_ago']
    time_span = timedelta(days=days_ago)
    span_start = now - time_span
    print(span_start)
    if self.request.user.is_staff == True:
      return Reading.objects.filter(observed_datetime__gte=span_start)
    elif not self.request.user.is_anonymous:
      user_id = self.request.user.id
      return Reading.objects.filter(user_id=user_id, observed_datetime__gte=span_start)
    else:
      return
  serializer_class = ReadingSerializer
  permissions_classes = (
    IsAdminOrCurrentUser
  )


class ReadingDetail(generics.RetrieveUpdateDestroyAPIView):
  def get_queryset(self):
    id = self.kwargs['pk']
    if self.request.user.is_staff == True:
      return Reading.objects.filter(id=id)
    elif not self.request.user.is_anonymous:
      user_id = self.request.user.id
      return Reading.objects.filter(id=id, user_id=user_id)
    else:
      return
  serializer_class = ReadingSerializer
  permissions_classes = (
    IsAdminOrCurrentUser
  )